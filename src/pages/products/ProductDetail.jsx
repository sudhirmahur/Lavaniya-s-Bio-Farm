import React from "react";
import { useParams, Link } from "react-router-dom";
import  { products } from "../../utils/data";
import SEO from "../../components/SEO";


export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <Link to="/" className="mt-4 inline-block text-primary underline">Back to home</Link>
      </div>
    );
  }

  return (
    <>
      <SEO title={`${product.name} — Lavaniya's Bio Farm`} description={product.short} />
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <img src={product.images[0]} alt={product.name} className="rounded-lg w-full object-cover" />
        <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
        <p className="mt-2 text-muted">{product.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="font-semibold text-lg">{product.price}</div>
          <button className="bg-primary text-white px-4 py-2 rounded">Order / Enquire</button>
        </div>
      </div>
    </>
  );
}
