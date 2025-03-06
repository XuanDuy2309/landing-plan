import { mdiEyeOffOutline, mdiEyeOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import { Input } from "../../../components/Input";

export const FormLogin = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [inputNameValue, setInputNameValue] = useState<string>('');
    const [inputPassValue, setInputPassValue] = useState<string>('');
    const handleInputChange = (e: any) => {
        setInputNameValue(e)
    }
    const handleInputPassWordChange = (e: any) => {
        setInputPassValue(e)
    }
    return <div className="w-[584px] h-full flex flex-col items-center justify-center">
        <div className="w-[584px] bg-white flex flex-col border rounded-2xl border-gray-300 p-8 text-[16px]">
            <span>Your Email</span>
            {/* <div className="w-full h-14 border rounded-xl border-gray-300 focus-within:border-gray-400">
                <input type="text" className="w-full h-full px-4 outline-none" />
            </div> */}
            <Input className="w-full h-full px-4 outline-none"
                placeholder="Enter your name"
                value={inputNameValue}
                onChange={handleInputChange} />
            <div className="w-full mt-6 flex items-center justify-between">
                <span>Password</span>
                <div className="flex items-center space-x-1" onClick={() => setHidePassword(!hidePassword)}>
                    <span>{hidePassword ? 'Show' : 'Hide'}</span>
                    <Icon path={hidePassword ? mdiEyeOffOutline : mdiEyeOutline} size={'16px'} />
                </div>
            </div>
            {/* <div className="w-full h-14 border rounded-xl border-gray-300 focus-within:border-gray-400">
                <input type={hidePassword ? 'password' : 'text'} className="w-full h-full px-4 outline-none" />
            </div> */}
            <Input className="w-full h-full px-4 outline-none"
                type={hidePassword ? 'password' : 'text'}
                placeholder="Enter your password"
                value={inputPassValue}
                onChange={handleInputPassWordChange} />
            <button className="w-full h-14 rounded-full bg-[#c3c3c3] mt-6 flex items-center justify-center hover:opacity-70 text-[22px] font-medium">
                <span className="text-white">Login</span>
            </button>
            <span className="w-full text-center mt-6 text-[18px] underline">Forget your password?</span>
        </div>
        <button className="w-full h-14 rounded-full border border-gray-300 mt-6 flex items-center justify-center hover:bg-[#c3c3c3] hover:text-white text-[20px]">
            <span className="">Create an account</span>
        </button>
    </div>;
}