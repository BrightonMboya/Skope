import Image from "next/image";
const ValueProposition = () => {
  return (
    <div className="mt-9 relative">
      <h3 className="flex items-center justify-center text-2xl font-semibold">
        Our Value Proposition
      </h3>

      <div className="bg-white rounded-[5vh] max-w-[300px] mt-10 shadow-2xl md:flex w-[65vh] lg:w-[90vh] ">
        <div className="ml-5 py-[5vh]">
          <div className="flex items-center justify-center">
            <Image
              src="/icon1.png"
              width={50}
              height={50}
              layout="intrinsic"
              alt=""
            />
          </div>

          <p className="mt-5 text-center mr-4">
            As a fashion product manufacturer, you make your products but they
            end up on a landfill after usage after some time. Let&apos;s say the
            cloth get stain or it outgrows the consumer.
          </p>

          <p className="mt-5 text-center mr-4">
            The consumer can return the item back to you where you will be able
            to use it as a raw material to the next product.
          </p>
          <p className="mt-5 text-center mr-4">
            And as a consumer, you can get a discount on your next purchase of
            the product.
          </p>
        </div>

        <div className="ml-8 py-[5vh]">
          <div className="flex items-center justify-center">
            <Image
              src="/icon2.png"
              width={50}
              height={50}
              layout="intrinsic"
              alt=""
            />
          </div>

          <p className="mt-5 text-center mr-4">
            We provide value to both the business owner and the consumer.
          </p>

          <p className="mt-5 text-center mr-4  ">
            For the business owner, you can easily verify that your consumers
            can receive the exact product you manufactured and not a replica,
            also you get the recycled material of your old product which you can
            then use on your next product.
          </p>

          <div className="flex items-center justify-center mt-[2rem]">
            <Image
              src="/icon3.png"
              width={50}
              height={50}
              layout="intrinsic"
              alt=""
            />
          </div>
          <p className="mt-5 text-center mr-4">
            On a business owner, you can easily verify that your consumers get
            the exact product you made and not a replica made by another
            business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
