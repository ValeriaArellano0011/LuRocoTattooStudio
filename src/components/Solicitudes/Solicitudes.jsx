import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptTattoo, getArtistas, getPendings } from "../../redux/actions";
import Loader from "../../assets/LOGO2.png";
import './Loader.css';

const Solicitudes = () => {
  const solicitudes = useSelector((state) => state.solicitudes);
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists)

  useEffect(() => {
    dispatch(getArtistas());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPendings());
  }, [dispatch]);

  const [loadingImages, setLoadingImages] = useState({});

  const handleAcceptTattoo = async (el, e) => {
    setLoadingImages((prevState) => ({ ...prevState, [el.id]: true }));
    await dispatch(
      acceptTattoo({ accept: true, id: el.id, artistname: e.folder })
    );
  };

  const handleRejectTattoo = async (el, e) => {
    setLoadingImages((prevState) => ({ ...prevState, [el.id]: true }));
    await dispatch(acceptTattoo({ accept: false, id: el.id, artistname: e.folder }));
  };

  return (
    <div>
      <h2>Solicitudes</h2>
      <ul>
        {solicitudes?.map((e, index) => (
          <li key={`pendingFolder${index}`}>
            <h2>{!e.files ? e.folder : ""}</h2>
            <ul style={{listStyle:'none', display:'flex', flexDirection:'row-reverse'}}>
            {e?.files?.map((el, index) => {
              let urlImg = `https://drive.google.com/uc?id=${el.id}`;
              let artistaCarpeta = e.folder.replace(' tattoos pendientes', '')
              let artista = artists.filter((artist) => artist.nombre === artistaCarpeta)
              console.log(artista)
              
              return (
                <div>
                <li key={`pendingImg${index}`} style={{display:"flex", flexDirection:"column", marginRight:"20px"}}>
                  {loadingImages[el.id] ? (
                    <img className='loaderPending' height="150px" src={Loader} alt="Loader" />
                  ) : (
                    <img
                      height="150px"
                      id={`pendingImg${index}`}
                      src={urlImg}
                      alt="tattoo pendiente"
                    />
                    )}
                    <div style={{position:"relative", top:"-40px", width:"80px", height:"80px",
                      background:`url(${artista?.at(0).imagen})`, borderRadius:"100%", backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}></div>
                  <br />
                <div style={{display:"flex", justifyContent:"space-around", width:"100%"}}>
                  <button style={{marginLeft:"10px", marginRight:"10px", padding:".4rem", borderRadius:"5px"}}
                    onClick={() => handleAcceptTattoo(el, e)}
                    disabled={loadingImages[el.id]}
                    >
                    Aceptar
                  </button>
                  <button style={{marginLeft:"10px", marginRight:"10px", padding:".4rem", borderRadius:"5px"}}
                    onClick={() => handleRejectTattoo(el, e)}
                    disabled={loadingImages[el.id]}
                    >
                    Rechazar
                  </button>
                </div>
                </li>
              </div>
              );
            })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Solicitudes;