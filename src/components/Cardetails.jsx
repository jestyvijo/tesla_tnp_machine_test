import React, { useState } from 'react';
import { data } from "../API/data";
import { Link, useParams } from 'react-router-dom';
export default function Cardetails() {
    const { id } = useParams()
    const [cars, setCars] = useState(data.projects);
    const[info,setInfo]=useState([])
    const[datas,setDatas] = useState("")
    const handleChooseColor = (id, color) => {
        setCars((prev) => {
            return prev.map((car) => {
                if (car.id === id) {
                    let newCheckImg = {};
                    //Change all property checkImg false, but color clicked = true
                    Object.keys(car.checkImg).map((item) => {
                        car.checkImg[item] = false;
                        newCheckImg = { ...car.checkImg, [color]: true };
                        console.log("newCheckImg")
                        return null;
                    });

                    return { ...car, checkImg: newCheckImg };
                } else {
                    return car;
                }
            });
        });
    };

    const datachane=(e)=>{
        const n=e.target.name
        const v=e.target.value
        setInfo({...info,[n]:v})
    }

    const subdata=()=>{
        const da="Music System="+info.ms+"\n"
                +"Navigation="+info.nav+"\n"
                +"Air bag="+info.ab+"\n"
                +"Alloy wheel="+info.aw+"\n"
                setDatas(da)
                window.confirm(da)
    }
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    {cars.filter((val) => {
                        if (val.id == id) {
                            console.log(val)
                            return val;
                        }
                    }).map((i) => (
                        <>
                            <div key={i.id} className="col-md-9">
                                {Object.keys(i.checkImg).map((item) => {
                                    if (i.checkImg[item]) {
                                        return (
                                            <img key={item} src={i.linkImg[item]} alt="car" className='img-fluid' />
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            </div>
                            <div className="col-md-3">
                                <div class="card" style={{ border: "none" }}>
                                    <div class="card-body">
                                        <h1 class="card-title" style={{ lineHeight: "45px" }}>{i.title}</h1>
                                        <h5 class="card-subtitle mb-2 text-muted" style={{ lineHeight: "45px" }}>{i.subtitle}</h5>
                                        <div class="row">
                                            {
                                                i.des.map((j) => (
                                                    <>
                                                        <div className='col-md-4' style={{ fontWeight: "bold", fontSize: "18px", lineHeight: "40px" }}>
                                                            {j.range}
                                                        </div>
                                                        <div className='col-md-4' style={{ fontWeight: "bold", fontSize: "18px", lineHeight: "40px" }}>
                                                            {j.top_speed}
                                                        </div>
                                                        <div className='col-md-4' style={{ fontWeight: "bold", fontSize: "18px", lineHeight: "40px" }}>
                                                            {j.time}
                                                        </div>
                                                    </>

                                                ))
                                            }
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-4'><i>Range</i></div>
                                            <div className='col-md-4'><i>Top speed</i></div>
                                            <div className='col-md-4'><i>0-60 mph</i></div>
                                        </div>
                                        <br />
                                        <p class="card-text">{i.description}</p>
                                        <h5 class="card-subtitle mb-2 text-muted">Dual Motor All-Wheel Drive</h5>
                                        <div class="card">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item fs-5">
                                                    {i.title}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    ${i.price}
                                                </li>
                                            </ul>
                                        </div><br />
                                        <h5 class="card-subtitle mb-2 text-muted">Tri Motor All-Wheel Drive</h5>
                                        <div class="card">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item fs-5">
                                                    {i.title}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    ${i.reduceprice}
                                                </li>
                                            </ul>
                                        </div><br />
                                        <h2>Available variants</h2>
                                        <div style={{ display: "flex" }}>
                                            {i.colors.map((k) => (
                                                <>
                                                    <p key={k} className={` ${i.checkImg[k] && 'active'}   `}
                                                        style={{
                                                            backgroundColor: k,
                                                            height: "40px",
                                                            width: "40px",
                                                            borderRadius: "50%",
                                                            marginRight: "13px",
                                                            cursor: 'pointer'
                                                        }}
                                                        onClick={() => handleChooseColor(i.id, k)}>

                                                    </p>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div className="row">
                    <div className='col-md-8' style={{ position: "fixed" }}>
                        <div className='fs-5 fix'>
                            <span>More Models Please</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="/model">
                                Refer the Link
                            </Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button" className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal">
                                Build and Price
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4">
                    </div>
                    <div class="modal" id="myModal">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">User customization features</h4>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body">
                                    <form className='form-group'>
                                        <label>Music System</label>
                                        <input type='text' name='ms' className='form-control' onChange={datachane}/><br/>
                                        <label>Navigation</label>
                                        <input type='text' name='nav' className='form-control' onChange={datachane}/><br/>
                                        <label>Air bag</label>
                                        <input type='text' name='ab' className='form-control' onChange={datachane}/><br/>
                                        <label>Alloy Wheel</label>
                                        <input type='text' name='aw' className='form-control'onChange={datachane}/><br/>
                                        <button className='btn btn-warning' onClick={subdata}>Add</button>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}