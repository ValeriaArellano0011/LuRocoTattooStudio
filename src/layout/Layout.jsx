import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Layout (props){
    return (
        <div className="Layout">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout