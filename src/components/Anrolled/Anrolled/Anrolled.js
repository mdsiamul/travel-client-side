
import { useParams } from 'react-router';

const Anrolled = (props) => {
    const { enrolId } = useParams()
    return (
        <div>
            <h2>This is enrold :{enrolId}</h2>
            <h1>fee:{props.fee}</h1>
        </div>
    );
};

export default Anrolled;