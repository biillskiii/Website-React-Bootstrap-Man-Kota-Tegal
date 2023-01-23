import Cardjurusan from "./Cardjurusan";
import Hero from "./Hero";
import Cardkegiatan from "./Cardkegiatan";
import jurusan1 from "./../Assets/Ipa.jpg";
import jurusan2 from "./../Assets/Ips.jpg";
import jurusan3 from "./../Assets/Agama.jpg";
import kegiatan1 from "./../Assets/Osis.jpeg";
import kegiatan2 from "./../Assets/Osis.jpeg";
import kegiatan3 from "./../Assets/Osis.jpeg";
import kegiatan4 from "./../Assets/Osis.jpeg";
import kegiatan5 from "./../Assets/Osis.jpeg";

const Maincontent = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center my-5">
            <h1>Jurusan Sekolah</h1>
          </div>
          <div className="col-lg-4 ml-xl-5 col-10 my-5">
            <Cardjurusan image={jurusan1} jurusan="MIPA" />
          </div>
          <div className="col-lg-4 ml-xl-5 col-10 my-5">
            <Cardjurusan image={jurusan2} jurusan="IPS" />
          </div>
          <div className="col-lg-4 ml-xl-5 col-10 my-5">
            <Cardjurusan image={jurusan3} jurusan="AGAMA" />
          </div>
        </div>
        <div className="row">
            <div className="col-12 text-center my-5">
                <h1>Kegiatan</h1>
            </div>
            <div className="col-12">
                <Cardkegiatan image ={kegiatan1} description="Osis Man Kota Tegal masa bakti 2019/2020"/>
                <Cardkegiatan image ={kegiatan2} description="Osis Man Kota Tegal masa bakti 2019/2020"/>
                <Cardkegiatan image ={kegiatan3} description="Osis Man Kota Tegal masa bakti 2019/2020"/>
                <Cardkegiatan image ={kegiatan4} description="Osis Man Kota Tegal masa bakti 2019/2020"/>
                <Cardkegiatan image ={kegiatan5} description="Osis Man Kota Tegal masa bakti 2019/2020"/>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Maincontent;
