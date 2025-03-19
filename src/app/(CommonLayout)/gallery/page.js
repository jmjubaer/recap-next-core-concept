/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import image from "@/assets/cartimage.avif";

const ImageOptimize = () => {
    return (
        <div className=''>
            <div>
                <h2 className='text-center text-3xl my-5'>
                    Image with img tag
                </h2>
                <img
                    className='mx-auto'
                    src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww'
                    alt=''
                    width={500}
                    height={500}
                />
            </div>
            <div>
                <h2 className='text-center text-3xl my-5'>
                    Image with Image components
                </h2>
                <Image
                    className='mx-auto'
                    src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww'
                    alt=''
                    width={500}
                    height={500}
                />
            </div>
            <div>
                <h2 className='text-center text-3xl my-5'>
                    Image with img components in local image
                </h2>
                <Image
                    className='mx-auto'
                    src={image}
                    alt=''
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
};

export default ImageOptimize;
