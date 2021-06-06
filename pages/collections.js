import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Select from "react-select";
import React, { useState } from "react";

import cards from "../public/data/cards.json"

const CustomSelect = (props) => {
  return (
    <Select
      id={props.id}
      instanceId={props.instanceId}
      isMulti={props.isMulti}
      placeholder={props.placeholder}
      options={props.options}
      onChange={props.onChange}
      theme={(theme) => ({
        ...theme,
        // borderRadius: 0,
        colors: {
          ...theme.colors,
          primary: "hotpink",
          neutral10: "lavender",
        },
      })}
      className="p-4 w-10/12 lg:w-3/12"
    />
  );
};

const Filters = (props) => {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-8">
      <CustomSelect
        id="deck-select"
        instanceId="deck-select"
        placeholder="Select a deck"
        options={props.deckOpts}
        onChange={props.onDeckSelect}
      ></CustomSelect>

      <CustomSelect
        id="artist-select"
        instanceId="artist-select"
        isMulti={true}
        placeholder="Select artists"
        options={props.artistOpts}
        onChange={props.onArtistSelect}
      ></CustomSelect>

      <CustomSelect
        id="order-select"
        instanceId="order-select"
        placeholder="Select an order"
        options={props.orderOpts}
        onChange={props.onOrderSelect}
      ></CustomSelect>
    </section>
  );
};

const DeckViewer = (props) => {
  const deck = props.deck;

  const cards = deck.cards;
  if (props.reversed) {
    cards.reverse();
  }

  return (
    <section className="flex flex-col lg:items-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-8">
      <div className="min-w-full px-auto text-center border-b-4 border-black text-gray-800 py-4 text-3xl font-bold mb-10 font-cursive">
        {deck.title}
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center gap-3 mx-auto relative">
        {cards.map((card) => (
          <div key={card.name} className="flex flex-col gap-2">
            <img
              className="mx-auto w-1/2 lg:w-10/12 rounded"
              src={card.img}
            ></img>
            <span className="mx-auto font-cursive">{card.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Collections() {
  const deckOpts = [
    { value: "standard", label: "Standard decks" },
    { value: "curated", label: "Curated decks" },
    { value: "all", label: "All decks" },
  ];

  const artistOpts = [
    { value: "taka", label: "Taka" },
    { value: "akiho", label: "Akiho" },
  ];

  const orderOpts = [
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ];

  const kuronDeck = {
    title: "kuron's deck",
    cards: [
      { name: "[akiho] placeholder F", img: "./images/H10.svg" },
      { name: "[akiho] placeholder F", img: "./images/back0.svg" },
      { name: "[akiho] placeholder F", img: "./images/H10.svg" },
      { name: "[akiho] placeholder F", img: "./images/back0.svg" },
      { name: "[akiho] placeholder F", img: "./images/H10.svg" },
      { name: "[akiho] placeholder F", img: "./images/back0.svg" },
      { name: "[akiho] placeholder F", img: "./images/H10.svg" },
    ],
  };

  const takaDeck = {
    title: "taka's deck",
    cards: [
      { name: "[taka] placeholder A", img: "./images/back0.svg" },
      { name: "[taka] placeholder A", img: "./images/back3.svg" },
      { name: "[taka] placeholder A", img: "./images/back0.svg" },
      { name: "[taka] placeholder A", img: "./images/back3.svg" },
      { name: "[taka] placeholder A", img: "./images/back0.svg" },
      { name: "[taka] placeholder A", img: "./images/back3.svg" },
      { name: "[taka] placeholder A", img: "./images/back0.svg" },
      { name: "[taka] placeholder A", img: "./images/back3.svg" },
    ],
  };

  const akihoDeck = {
    title: "akiho's deck",
    cards: [
      { name: "[taka] placeholder A", img: "./images/back0.svg" },
      { name: "[taka] placeholder A", img: "./images/back3.svg" },
      { name: "[taka] placeholder A", img: "./images/back0.svg" },
      { name: "[taka] placeholder A", img: "./images/back3.svg" },
      { name: "[taka] placeholder A", img: "./images/back0.svg" },
      { name: "[taka] placeholder A", img: "./images/back3.svg" },
      { name: "[taka] placeholder A", img: "./images/back0.svg" },
      { name: "[taka] placeholder A", img: "./images/back3.svg" },
    ],
  };

  const decksMap = {
    kuron: kuronDeck,
    akiho: akihoDeck,
    taka: takaDeck,
  };

  const [deckSelected, onDeckSelect] = useState(null);
  const [artistSelected, onArtistSelect] = useState([]);
  const [orderSelected, onOrderSelect] = useState(null);

  const showSelected = (selected) => {
    let text = "[DEBUG] You selected ";
    if (!selected) {
      text += "nothing";
    } else {
      if (Array.isArray(selected)) {
        text += selected.map((item) => item.value).join(" ");
      } else {
        text += selected.value;
      }
    }

    return <span className="mx-4">{text}</span>;
  };

  const showDeckViewer = (artistsSelected, decksMap, order) => {
    const artists = artistsSelected.map((item) => item.value);
    const decks = [];
    if (artists.length === 0) {
      // show all
      decks.push(...Object.entries(decksMap));
    } else {
      // show selected
      for (const [key, deck] of Object.entries(decksMap)) {
        if (artists.includes(key)) {
          decks.push([key, deck]);
        }
      }
    }

    return (
      <>
        {decks.map(([key, deck], index) => (
          <DeckViewer
            key={key + "-" + index}
            deck={deck}
            reversed={order && order.value === "desc" ? true : false}
          />
        ))}
      </>
    );
  };

  return (
    <Layout pageTitle="diva cards">
      <Header />
      <main>
        <Filters
          deckOpts={deckOpts}
          onDeckSelect={onDeckSelect}
          artistOpts={artistOpts}
          onArtistSelect={onArtistSelect}
          orderOpts={orderOpts}
          onOrderSelect={onOrderSelect}
        ></Filters>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-8">
          {showSelected(deckSelected)}
          {showSelected(artistSelected)}
          {showSelected(orderSelected)}
        </div>
        {showDeckViewer(artistSelected, decksMap, orderSelected)}
      </main>
      <Footer />
    </Layout>
  );
}
