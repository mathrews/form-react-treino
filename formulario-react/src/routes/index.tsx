import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageNotFound from "../pages/PageNotFound"

const Caminhos = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Caminhos