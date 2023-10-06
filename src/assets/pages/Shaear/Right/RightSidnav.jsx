import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';
import qzone1 from '../../../../assets/qZone1.png'
import qzone2 from '../../../../assets/qZone2.png'
import qzone3 from '../../../../assets/qZone3.png'

const RightSidnav = () => {
    return (
        <div>
            <div className='text-3xl p-4 space-y-2 '>
                <h1>Login with </h1>
                <button className='btn btn-outline w-full'>
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className='btn btn-outline w-full'>
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>
            <div className='text-3xl p-4  '>
                <h1 className='mb-2'>Find us on </h1>
                <a href="" className='flex items-center gap-2 p-2 border rounded-t-lg text-xl w-full'>
                    <FaFacebook ></FaFacebook>
                    facebook
                </a>
                <a href="" className='flex items-center gap-2 p-2 border-x  text-xl w-full'>
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a href="" className='flex items-center gap-2 p-2 border rounded-b-lg text-xl w-full'>
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>

            </div>

            <div className='text-3xl p-4 space-y-2 '>
                <h1>Q zoon </h1>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
                
            </div>
        
        </div>
    );
};

export default RightSidnav;