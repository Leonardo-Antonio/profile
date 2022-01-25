import React, { useState } from "react";
import { FormContact } from "../../components/FormContact";
import { ContainerLayoutDefault } from "../../layouts/ContainerLayoutDefault";

export default function ContactUs() {
  
  return (
    <ContainerLayoutDefault title="Contacto">
      <div className="flex justify-center">
        <div>
          <div>
            <h1 className="font-bold text-3xl text-center p-10">Contactame</h1>
          </div>
          <FormContact />
        </div>
      </div>
    </ContainerLayoutDefault>
  );
}
