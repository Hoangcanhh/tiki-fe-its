import { Routes, Route } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavPopup from "./components/Header/NavPopup";
import ResultPopup from "./components/Result/ResultPopup";
import ResultPage from "./components/Result/ResultPage";
import HomePage from "./components/HomePage/HomePage"
import Filter from "./components/HomePage/Filter";
import DetailPage from "./components/DetailPage/DetailPage"
import CartInfo from "./components/Cart/CartInfo";
import ShipInfo from "./components/Cart/ShipInfo";
import Footer from "./components/Footer/Footer";

function App() {
    const [nav, setNav] = useState(false);
    const [popup, setPopup] = useState(false);
    const [input, setInput] = useState("");
    const result = useRef([]);
    const [listResult, setListResult] = useState([]);
    const [filter, setFilter] = useState(2); // Lưu giá trị hiển thị của cột filter khi responsive
    const [cart, setCart] = useState([]);
    const [buy, setBuy] = useState([]);
    const [bill, setBill] = useState(false); // Dùng để hiển thị hóa đơn khi click mua ngay
    const [priceNow, setPrice] = useState(0);
    const [index, setIndex] = useState(null);

    const [books, setBooks] = useState([]);
    const [data, setData] = useState([]);

    useEffect( () => {
        fetch('./books.json')
            .then(res => res.json())
            .then(book => {
                setData(book);
                setBooks(book);
            })
    }, []);

    return (
        <div
            className="app">
            <div className="sideHead max-w-full lg:bg-white sm:bg-[#1ba8ff]">
                <Header
                    nav={nav}
                    setNav={setNav}
                    input={input}
                    setInput={setInput}
                    setPopup={setPopup}
                    result={result}
                    data={data}
                    cart={cart}
                />
            </div>
            <NavPopup
                nav={nav}
                setNav={setNav}
            />
            <ResultPopup
                input={input}
                listResult={listResult}
                setListResult={setListResult}
                result={result}
                popup={popup}
                setPopup={setPopup}
                data={data}
                setIndex={setIndex}
            />
            <Filter
                filter={filter}
                data={data}
                setBooks={setBooks}
            />
            <div
                className={bill ? "w-full h-full flex justify-center" : "hidden"}>
                <div 
                    className="w-full h-full fixed top-0 bg-[#52565c]/60"
                    onClick={() => setBill(false)}></div>
                <div className={bill
                        ? "bg-[#f5f5fa] p-3 rounded-lg bgShadow fixed top-[120px]"
                        : "hidden"}>
                    <ShipInfo
                        data={data}
                        buy={buy}
                        cart={cart}
                        bill={bill}
                        priceNow={priceNow}
                    />
                </div>
            </div>

            <Routes>
                {data && <Route path="/" element={
                    <HomePage
                        data={data}
                        books={books}
                        setBooks={setBooks}
                        setIndex={setIndex}
                        filter={filter}
                        setFilter={setFilter}
                        />
                    }/>}
                {data && <Route path="/detail" element={
                    <DetailPage
                        data={data}
                        i={index}
                        cart={cart}
                        setCart={setCart}
                        setBill={setBill}
                        setPrice={setPrice}
                        />
                    }/>}
                {data && <Route path="/result" element={
                    <ResultPage
                        setPopup={setPopup}
                        data={data}
                        result={result}
                        setIndex={setIndex}
                        />
                    }/>}
                {data && <Route path="/cart" element={
                    <CartInfo
                        data={data}
                        cart={cart}
                        setCart={setCart}
                        buy={buy}
                        setBuy={setBuy}
                        setIndex={setIndex}
                        priceNow={priceNow}
                        />
                    }/>}
            </Routes>

            <div className="max-w-full bg-white">
                <Footer/>
            </div>
        </div>
    );
}

export default App;