import { FormLogin } from "../containers/form-login";
import { LeftBarLogin } from "../containers/left-bar-login";

export const LoginScreen = () => {
    return <div className="w-full h-screen flex items-center justify-center bg-gray-50">
        <div className='w-[1080px] flex items-start'>
            <LeftBarLogin />
            <FormLogin />
        </div>
    </div>;
};