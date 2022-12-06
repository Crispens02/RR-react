import React from 'react'
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
    const [state, handleSubmit] = useForm("xyyvrjgj");
    if (state.succeeded) {
        return <p>Gracias por la consulta!</p>;
    }
  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
    <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
              id="email"
              type="email" 
              name="email"
            placeholder="Tu correo electronico"
            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"/>
          
          <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />  
        </div>
        <div className="mb-6">
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Tu mensaje"
            className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          ></textarea>
              <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
        </div>
        <div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-primary border-primary w-full rounded border p-3 text-black transition hover:bg-opacity-90"
          >
            Enviar mensaje
          </button>

        </div>
      </form>
    
    </div>
</div> 
  )
}

export default ContactForm


/* import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xyyvrjgj");
  if (state.succeeded) {
      return <>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}


export default ContactForm;
*/