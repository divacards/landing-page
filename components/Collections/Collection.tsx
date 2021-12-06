import React from "react";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

const CollectionItem = () => {
    const { t } = useTranslation("home");
    return (
        <section className="flex justify-around home-section">
            <div className="flex-1">
                <Image
                    height={1000}
                    width={1000}
                    loader={({ src }) => src}
                    unoptimized
                    src="/images/collections/acky/sample.png"
                    alt="Main image"
                    className="auto-image"
                />
            </div>

            <div className="flex-1">
                <Image
                    height={1000}
                    width={1000}
                    loader={({ src }) => src}
                    unoptimized
                    src="/images/collections/iordium/sample.png"
                    alt="Main image"
                    className="auto-image"
                />
            </div>
        </section>
    );
};

export default CollectionItem;
