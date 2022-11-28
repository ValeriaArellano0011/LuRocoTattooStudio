import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Layout (props){
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
}

export default Layout