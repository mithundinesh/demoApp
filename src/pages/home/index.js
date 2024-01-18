import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { save } from "../../redux/countrySlice"
import Footer from "../../components/footer"
import Header from "../../components/header"

function Home() {

    const [continent, setContinent] = useState("all")
    const tempCountries = useSelector((state) => state.country.countries)
    const [countries, setCountries] = useState(useSelector((state) => state.country.countries))
    const dispatch = useDispatch()

    const fetchCountries = () => {
        fetch("https://restcountries.com/v2/all?fields=name,region,flag ").then(res => res.json()).then(data => { setCountries(data); dispatch(save(data)); })
    }

    useEffect(() => {
        fetchCountries();

    }, [])

    const filterCountries = () => {
        if (continent === "all")
            setCountries(tempCountries)
        else {
            const temp = [...tempCountries];
            const filtered = temp.filter(x => x.region === continent);
            setCountries(filtered)
        }
    }

    useEffect(() => {
        filterCountries();

    }, [continent])




    return (
        <div className="position-relative vh-100">
            <Header setContinent={setContinent} continent={continent} />
            <div style={{ maxHeight: "70vh" }} className="row flex-wrap px-5 justify-content-center overflow-x-hidden   w-100">
                {countries && countries.length > 0 && countries.map(country => {
                    return (
                        <div className="col-12 col-sm-4 d-flex p-3 border m-3 border-1 shadow border-dark">
                            <img className="w-25 me-4" src={country?.flag} />
                            <div className="text-start">
                                <div className="fw-bolder fs-5"> {country?.name}</div>
                                <div className="fs-6">{country?.region}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    );
}
export default Home;