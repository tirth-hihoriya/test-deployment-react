import React, { useState } from "react";
import Team from "./team";

const Options = ({setTeamMember}) => {
    const [filters, setFilters] =useState({
        searchText: '',
        region: new Set
    })
    
    const onchange = (e)=>{
        
        const {value, name, checked} = e.target;


        const currentFilter = filters;
        if(name === 'region'){
            if(checked){
                currentFilter.region.add(value);
            }
            else{
                currentFilter.region.delete(value);
            }
        }
        else{
            currentFilter.searchText = value;
        }
      



        setFilters(currentFilter);
        if(filters.region || filters.searchText){
            let filteredStores = Team.filter(item => (
                item.name.toLowerCase().includes(filters.searchText.toLowerCase()) &&
                (
                    currentFilter.region.has(item.region) ||
                    currentFilter.region.size === 0 //No selected region, show all
                )
            ));
        setTeamMember(filteredStores)


        }
    }

    
  return (
    <div className="w-100">
          <div className="w-100">
            <div className="mb-3">
              <input
                type="text"
                className="form-control filter-search"
                placeholder="search"
                onChange={onchange}
              />
            </div>
            <h6>FILTER</h6>
            {/* <div className="my-3">
              <h5 className="border-bottom border-dark pb-2">Business</h5>
            </div> */}
            {/* <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Corporate</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">
                Renewable Power & Transition
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Infrastructure</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Private Equity</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Real Estate</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Insaurance Solutions</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Public Securities</label>
            </div>
            <div className="my-3">
              <h5 className="border-bottom border-dark pb-2">
                Leadership Role
              </h5>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Managing Partners</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Managing Directors</label>
            </div> */}
            <div className="my-3">
              <h5 className="border-bottom border-dark pb-2">Region</h5>
            </div>
           
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Europe" onChange={onchange} name="region"/>
              <label className="form-check-label">Europe</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox"  value="USA" onChange={onchange} name="region"/>
              <label className="form-check-label">USA</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="India" onChange={onchange} name="region"/>
              <label className="form-check-label">India</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Canada" onChange={onchange} name="region"/>
              <label className="form-check-label">Canada</label>
            </div>
          </div>
    </div>
  );
};

export default Options;