import icon_list from '../assets/images/icon-list.svg'
import home_img from '../assets/images/illustration-sign-up-desktop.svg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const SubscribeForm = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        if (!email) {
            setError('Email is required');
            return false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Email address is invalid');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // If validation is successful, navigate to another page
            navigate('/success');
        }
    };

    return (
        <div className="m-0 md:w-full sm:w-full box-border flex lg:w-[55rem] lg:m-auto bg-white mt-0 lg:mt-12 rounded-t-3xl lg:rounded-xl
            flex-col-reverse lg:flex-row w-fit
        ">
            <div className="flex gap-3 p-2">
                <div className="px-1 my-2 mt-0 lg:my-8 lg:px-10">
                    <h1 className="mt-12 mb-10 text-5xl font-bold text-start">Stay updated!</h1>
                    <p className='mb-8 text-md '>Join 60,000+ product managers receiving  monthly updates on:</p>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <img src={icon_list} alt="" className="mr-2" />
                            <p>Product discovery and building what matters</p>
                        </div>
                        <div className="flex items-center">
                            <img src={icon_list} alt="" className="mr-2" />
                            <p>Measuring to ensure updates are a success</p>
                        </div>
                        <div className="flex items-center">
                            <img src={icon_list} alt="" className="mr-2" />
                            <p>And much more!</p>
                        </div>
                        <form onSubmit={handleSubmit} className='grid grid-cols-1'>
                            <span className='font-bold'>Email address</span>
                            <input className='p-3 pt-3 mt-4 border rounded-lg border-slate-400 '
                                type="email" required placeholder='email@company.com'
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                            {error && <p className="text-red-500">{error}</p>}
                            <button
                                type='submit'
                                className='p-3 pt-3 mt-4 font-bold text-white transition-colors duration-300 bg-[#232742] border rounded-lg hover:bg-orange-500'
                            >Subscribe to monthly newsletter</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="">
                <img className='w-full px-0 py-0 lg:rounded-none lg:py-5 lg:px-4' src={home_img} alt="" />
            </div>
        </div>
    )
}

export default SubscribeForm;
