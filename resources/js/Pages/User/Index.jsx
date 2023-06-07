import Reac from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/react";
import { useFetch } from "../Api/Api";

const Index = ({ auth }) => {
    const { data } = useFetch("https://pokeapi.co/api/v2/pokemon");
    console.log(data);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    DEX
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="App">
                <h1>Pokemon</h1>
                <div className="card">
                    <ul>
                        {data.map((result) => (
                            <li></li>
                        ))}
                    </ul>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
