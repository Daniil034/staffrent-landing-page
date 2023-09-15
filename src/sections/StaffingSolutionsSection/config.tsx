import {SolutionItemProps} from "./SolutionItem/SolutionItem";
import cleanerImage from 'shared/images/cleanerImage.png'
import manWithRopeImage from 'shared/images/manWithRopeImage.png'
import carsImage from 'shared/images/carsImage.png'

export const SOLUTION_LIST: SolutionItemProps[] = [
    {
        title: 'How will outstaffing make a difference for you?',
        body: <p>
            Outstaffing allows you to solve a number of employee-related issues both in small and large businesses
            overThe Netherlands. "Since 2006, the outstaffing service hasbecome popular among domestic employers. In our
            10 of operation, more than 1000 of our clients have utilized the outstaffing service and there are a number
            of reasons for this:
            <ul>
                <li>Registration of foreign citizens in accordance with the legislation of the EU.</li>
                <li>Protection during verification of regulatory authorities.</li>
                <li>Tax payments through G-account and reduced staff costs.</li>
                <li>No obligations on labour relations with staff.</li>
                <li>Housing, Transport and Working clothes are provided</li>
            </ul>
        </p>,
        backgroundImgSrc: cleanerImage
    },
    {
        title: 'Our insurance in front of You',
        body: <>
            <p>OUR TRUSTED BACK-OFFICE PARTNER FOR FLEXWORK OVERSEAS</p>
            <p>
                Organizedflex is a specialist in facilitating the entire administrative process of posting employees
                according to WagwEU guidelines.
            </p>
            <p>
                When We second our employees to another country it must be properly regulated. Must correctly be
                considered
                the applicable laws and regulations. However, the European laws and regulations governing the employment
                of
                employees in other countries are becoming increasingly complex. There is therefore an increasing need
                for an
                integrated service. Due to the diversity of questions in the field of payroll tax, social security
                contributions, VAT, European and local legislation for secondment, these can no longer be seen
                separately
                from each other.
                OrganizedFlex is the one-stop shop for Our integrated services. Digital portal captures and manages our
                entire (secondment) process. We stand for Simplicity, Trust and Efficiency for Service Providers,
                Service
                Recipients, Seconded Employees and Independent Contractors who want to work at home and abroad.
            </p>
            <p>
                The unique combination of knowledge and the digital platform ensure optimal transparency. Every
                connected
                party in the chain is always fully informed about the entire posting process.
            </p>
            <p>
                All transactions are carried out and accompanied by a tripartite agreement involving Customer - You,
                Contractor - Us and Intermediary/Сonfidant - OrganizedFlex B.V.
            </p>
        </>,
        backgroundImgSrc: manWithRopeImage
    },
    {
        title: 'STAFF HIRED DIRECTLY',
        body: <p>
            We are very attentive to the recruitment process, because both the employee and the employer must be
            satisfied with the cooperation. Therefore, we take care of finding and providing new talents for you.
            Labor lease also brings continuity to your operations. For example, you can create a talent pool specific to
            your company’s needs together with us. This way, you can make sure you have the right type of talent
            promptly.
            <ul>
                <li>Short lines and clear agreements;</li>
                <li>You get people you can build on/trust;</li>
                <li>You get people who are 100% committed;</li>
                <li>You get a permanent group of people who are willing to work for you for a shorter period of time.
                </li>
            </ul>
            The work accepted is checked by our company managers. The manager will be present at the work site every
            day, checking the work done and solving problems. So you don’t have to worry about the hassle of work,
            paperwork, etc.
        </p>,
        backgroundImgSrc: carsImage
    }
]
