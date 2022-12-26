import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExpCard from "../Components/Card/ExpCard";
import HomeCard from "../Components/Card/HomeCard";
import SearchForm from "../Components/Form/SearchForm";
import Spinner from "../Components/Spinner/Spinner";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allExp, setAllExp] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("expdata.json")
      .then((res) => res.json())
      .then((data) => {
        setAllExp(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="md:flex justify-center gap-10 px-6 md:px-10 lg:px-20">
      <div className=" mt-4">
        <SearchForm />
      </div>
      <div className="flex-1 mt-4">
        {/* Homes Cad */}
        <div>
          <div className="flex justify-between px-4">
            <p className="text-xl font-bold">Homes</p>
            <Link to="/coming-soon">
              <p>See All</p>
            </Link>
          </div>
          <div className="container mx-auto pb-8 pt-2">
            <div className="flex flex-wrap">
              {[...Array(3)].map((exp, i) => (
                <HomeCard key={i} exp={exp}></HomeCard>
              ))}
            </div>
          </div>
        </div>

        {/* Experiences Cad */}
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <div className="flex justify-between px-4">
              <p className="text-xl font-bold">Experiences</p>
              <Link to="/coming-soon">
                <p>See All</p>
              </Link>
            </div>
            <div className="container mx-auto pb-8 pt-2">
              <div className="flex flex-wrap">
                {allExp.slice(0, 4).map((exp, i) => (
                  <ExpCard key={i} exp={exp}></ExpCard>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
