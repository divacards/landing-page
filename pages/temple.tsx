import Layout from "../components/Layout";
import React, { useState, useEffect, Suspense } from 'react';
import { useWeb3React } from "@web3-react/core";
import { useRouter } from 'next/router';
import { Invoker } from "../components/Widget/Invoker";
import { faWallet, faDice, faGifts } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isChainSupported, getOpenseaAssetsEndpoint } from "../web3/consts";
import { useTranslation } from "next-export-i18n";
import { SpinLoading, PlaceHoldStatus } from "../components/Custom/CustomStatus";

import {
  ArrowCircleUpIcon,
  ExclamationIcon,
  InboxIcon,
  CubeIcon,
  CurrencyYenIcon,
} from "@heroicons/react/outline";

const tabs = [
  { title: "Inventory", Icon: faWallet, Comp: Inventory },
  { title: "Omikuji", Icon: faDice, Comp: Omikuji },
  { title: "Souvenir", Icon: faGifts, Comp: Souvenir },
  // { "title": "Forge", Icon: CubeIcon, Comp: Forge },
  // { "title": "Bounty", Icon: CurrencyYenIcon, Comp: Bounty }
]

function Inventory() {
  const router = useRouter();
  const { account, chainId } = useWeb3React();
  const [res, setContents] = useState({ assets: [] });

  useEffect(() => {
    if (chainId) {
      const assets_endpoint = getOpenseaAssetsEndpoint(chainId, account, null, null)
      setContents(undefined)
      fetch(assets_endpoint)
        .then(response => response.json())
        .then((data) => {
          setContents(data)
        })
    } else {
      console.log("No Chain ID")
    }
  }, [chainId]);

  if (!chainId) {
    return (<PlaceHoldStatus message="Please connect the wallet" Icon={ArrowCircleUpIcon} />);
  } else if (!isChainSupported(chainId)) {
    return (<PlaceHoldStatus message="Unsupported chain" Icon={ExclamationIcon} />);
  }

  if (res) {
    if (res.assets.length == 0) {
      // Inventory is empty
      return (<PlaceHoldStatus message="Inventory is Empty" Icon={InboxIcon} />);
    } else {
      // Inventory is not empty
      return (
        <>
          <div className="flex flex-wrap gap-5 text-center p-2 justify-start place-content-center m-2">
            {res && res.assets.map((item) => {
              return (
                <button
                  key={item.num_sales}
                  className="w-10 h-10 pb-full border-supernova rounded-lg bg-gray-700"
                  onClick={() => {
                    const item_type = item.traits.length == 1 ? "box" : "card";
                    router.push(`/items?id=${item.num_sales}&asset_type=${item_type}`)
                  }}
                >
                  {item.num_sales}
                </button>
              )
            })}
          </div>
        </>
      )
    }
  } else {
    return (<SpinLoading />)
  }


}

function Omikuji() {
  const { active, error, chainId } = useWeb3React();
  if (!chainId) {
    return (<PlaceHoldStatus message="Please connect the wallet" Icon={ArrowCircleUpIcon} />);
  } else if (!isChainSupported(chainId)) {
    return (<PlaceHoldStatus message="Unsupported chain" Icon={ExclamationIcon} />);
  }

  return (
    <div key="omikuji" className="m-10 font-cursive text-diablo-dark-gold text-center">
      Get your Omikuji (おみくじ) and see your fortune
    </div>
  )
}

function Forge() {
  return <div key="forge">Forge</div>
}
function Souvenir() {
  const { active, error, chainId } = useWeb3React();
  if (!chainId) {
    return (<PlaceHoldStatus message="Please connect the wallet" Icon={ArrowCircleUpIcon} />);
  } else if (!isChainSupported(chainId)) {
    return (<PlaceHoldStatus message="Unsupported chain" Icon={ExclamationIcon} />);
  }
  return (
    <div key="souvenir" className="m-10 font-cursive text-diablo-dark-gold text-center">
      Get your lucky charm
    </div>
  )
}

function Bounty() {
  return <div key="bounty">Bounty</div>
}

export default function Temple() {

  const { t } = useTranslation();
  const [state, setState] = useState({ index: 0 });

  function switchTab(index) {
    setState({ index: index })
  }

  return (
    <Layout pageTitle="tokyo.cards">
      <section className="deck-section py-5 h-20">
        <div className="flex flex-row mx-auto w-1/3 text-cinnabar">
          <div className="border-obsidian-gold border-b-2 w-1/2 m-auto" > </div>
        </div>
        <span className="w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center">
          <div className="font-cursive text-diablo-dark-gold text-xl">
            {t(`temple.${tabs[state.index].title.toLowerCase()}`)}
          </div>
        </span>
        <div className="flex flex-row mx-auto w-1/3 text-cinnabar">
          <div className="border-obsidian-gold border-b-2 w-1/2 m-auto" > </div>
        </div>
      </section>

      <section className="text-white">
        <div className="grid grid-cols-10 gap-2 my-3">
          <div className="col-span-8 bg-obsidian-dark rounded-br-lg rounded-tr-lg lg:rounded-lg">
            {tabs.map(({ Comp }, index) => {
              if (state.index == index) {
                return <Comp key={index} />
              }
            })}
          </div>
          <div className="col-span-2">
            {tabs.map(({ title, Icon }, index) => {
              return (
                <button
                  key={`b-${index}`}
                  className={
                    `w-full p-2  mb-2 flex auto-padding border-l-4 rounded black
                    border-${state.index == index ? 'razzmatazz' : 'supernova'}`
                  }
                  onClick={() => { switchTab(index) }}
                >

                  <FontAwesomeIcon
                    icon={Icon}
                    key={`i-${index}`}
                    className={`w-6 mx-1 text-2xl text-${state.index == index ? 'razzmatazz' : 'supernova'}`}
                  />
                  {/* <Icon key={`i-${index}`} className={`w-6 mx-1 text-${state.index == index ? 'razzmatazz' : 'supernova'}`} /> */}
                  <span key={`s-${index}`} className={
                    `font-cursive text-razzmatazz hidden sm:block ml-2`
                  }>
                    {t(`temple.${title.toLowerCase()}`)}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
