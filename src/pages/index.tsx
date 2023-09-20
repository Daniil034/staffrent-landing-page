import {Route, Routes} from "react-router-dom";
import {MainPage} from "./MainPage/MainPage";
import {AboutUsPage} from "./AboutUsPage/AboutUsPage";
import {ContactUsPage} from "./ContactUsPage/ContactUsPage";
import {EmployersPage} from "./EmployersPage/EmployersPage";
import {JobSeekerPage} from "./JobSeekerPage/JobSeekerPage";
import {FaqPage} from "./FaqPage/FaqPage";
import {ActivityPage} from "./ActivityPage/ActivityPage";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/about" element={<AboutUsPage/>}/>
            <Route path="/contact-us" element={<ContactUsPage/>}/>
            <Route path="/employers" element={<EmployersPage/>}/>
            <Route path="/job-seeker" element={<JobSeekerPage/>}/>
            <Route path="/faq" element={<FaqPage/>}/>
            <Route path='/activity/:id' element={<ActivityPage/>}/>
        </Routes>
    );
}
