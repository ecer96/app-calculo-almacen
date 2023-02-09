import React, { useState } from "react";
import cama from "../Assets/cama.png";
import refrigerador from "../Assets/refrigerador.png";
import alacena from "../Assets/alacena.png";
import microwave from "../Assets/microwave.png";
import sofa from "../Assets/sofa.png";
import television from "../Assets/television.png";
import laundyMachine from "../Assets/laundry-machine-.png";
import dining from "../Assets/dinning-table.png";
import desk from "../Assets/desk-chair.png";
import wardrobe from "../Assets/wardrobe.png";

export const Reto = () => {
    const icons = [
        { id: 1, name: "bed", src: cama, price: 1.2 },
        { id: 2, name: "refrigerator", src: refrigerador, price: 1 },
        { id: 3, name: "furniture", src: alacena, price: 0.5 },
        { id: 4, name: "oven", src: microwave, price: 0.6 },
        { id: 5, name: "sofa", src: sofa, price: 1.5 },
        { id: 6, name: "tv", src: television, price: 0.25 },
        { id: 7, name: "washer-dryer", src: laundyMachine, price: 0.5 },
        { id: 8, name: "dinning", src: dining, price: 2 },
        { id: 9, name: "desk", src: desk, price: 0.75 },
        { id: 10, name: "wardrobe", src: wardrobe, price: 3.2 },
    ];

    const [count, setCounts] = useState(Array(icons.length).fill(0));

    const [total, setTotal] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [finalTotal, setFinalTotal] = useState(0);
    const [midPrice, setMidPrice] = useState(0);
    const [items, setItems] = useState(0);

    const handleAdd = (index) => {
        setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] += 1;
            return newCounts;
        });
    };

    const handleSubtract = (index) => {
        setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] > 0) {
                newCounts[index] -= 1;
            }
            return newCounts;
        });
    };

    const calculateTotal = () => {
        let totalValue = 0;
        let itemsValue = 0;
        count.forEach((count, index) => {
            totalValue += count * icons[index].price;
            itemsValue += count;
        });
        setTotal(parseFloat(totalValue.toFixed(2)));
        setSubTotal(parseFloat((total * 200).toFixed(2)));
        setTax(parseFloat((subTotal * 0.16).toFixed(2)));
        setFinalTotal(parseFloat((subTotal + tax).toFixed(2)));
        setMidPrice(parseFloat((finalTotal * 0.5).toFixed(2)));
        setItems(parseFloat(itemsValue.toFixed(2)));
        
    };

    const handleClear = () => {
        setCounts(Array(icons.length).fill(0));
        setTotal(0);
    };

    return (
        <div className="mt-20">
            <div className="grid grid-cols-5 ml-52 mr-52 max-sm:grid-cols-1 max-sm:ml-0 max-sm:mr-0 max-md:grid-cols-2 max-md:m-10 max-lg:grid-cols-3">
                {icons.map(({ id, src, name, price }, index) => (
                    <div key={id} className='mb-24 items-center'>
                        <div className="flex justify-center max-lg:mt-10">
                            <img
                                src={src}
                                alt={`Icon ${index + 1}`}
                                className="h-20"
                            />
                        </div>
                        <p className="capitalize  font-light">{name}</p>
                        <div className="flex justify-around">
                            <button
                                onClick={() => handleSubtract(index)}
                                className="py-1 px-3 bg-slate-300"
                            >
                                -
                            </button>
                            <div>{count[index]}</div>
                            <button
                                onClick={() => handleAdd(index)}
                                className="py-1 px-3 bg-slate-300"
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <br />
            <div className="flex justify-around mt-10">
                <button
                    onClick={handleClear}
                    className="border border-orange-400 px-16 py-4 font-medium rounded-md max-sm:py-1 max-sm:px-10"
                >
                    Clear
                </button>
                <button
                    onClick={calculateTotal}
                    className="bg-orange-400 px-6 py-4 font-medium rounded-md max-sm:py-1 max-sm:px-1"
                >
                    Calculate Total
                </button>
            </div>
            <br />

            <h1 className="font-bold text-2xl mb-10">Summary</h1>
            <div className="mb-10">
                Total Items:<span className="ml-20">{items}</span>
                <br />
                Total:<span className="ml-20">{total} m2</span>
                <br />
                Subtotal:<span className="ml-20">{subTotal}</span>
                <br />
                Tax:<span className="ml-28">{tax}</span>
                <br />
                <span className="font-bold">Total:<span className="ml-28">{finalTotal}</span></span> <br />
                <span className="font-bold">Due Today 50%:<span className="ml-10">{midPrice}</span></span>
            </div>
        </div>
    );
};
