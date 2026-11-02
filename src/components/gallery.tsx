"use client";

import Image from "next/image";
import { Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { galleryPhotos } from "@/content/site";

export function Gallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const [selected, setSelected] = useState<
    (typeof galleryPhotos)[number] | null
  >(null);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  function close() {
    dialog.current?.close();
  }

  return (
    <>
      <div className="gallery">
        {galleryPhotos.map((photo, index) => (
          <figure key={photo.src}>
            <button
              type="button"
              className="gallery-trigger"
              aria-label={`Ampliar foto: ${photo.alt}`}
              aria-haspopup="dialog"
              onClick={(event) => {
                trigger.current = event.currentTarget;
                setSelected(photo);
                dialog.current?.showModal();
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={index === 0
                  ? "(max-width: 700px) 100vw, 65vw"
                  : "(max-width: 700px) 100vw, 35vw"}
              />
            </button>
            <figcaption>
              <span>{photo.caption}</span>
              <Expand size={20} aria-hidden="true" />
            </figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-labelledby="gallery-title"
        aria-describedby="gallery-disclaimer"
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onClose={() => {
          setSelected(null);
          trigger.current?.focus({ preventScroll: true });
        }}
      >
        <div className="lightbox-heading">
          <h2 id="gallery-title">{selected?.caption}</h2>
          <button
            type="button"
            className="lightbox-close"
            onClick={close}
            aria-label="Fechar imagem ampliada"
          >
            <X aria-hidden="true" />
          </button>
        </div>
        {selected && (
          <div className="lightbox-image">
            <Image src={selected.src} alt={selected.alt} fill sizes="95vw" />
          </div>
        )}
        <p id="gallery-disclaimer">
          Imagem ilustrativa de um projeto conceitual. Não representa uma unidade da PULSO.
        </p>
      </dialog>
    </>
  );
}
