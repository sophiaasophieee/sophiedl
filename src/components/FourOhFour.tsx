import Image from 'next/image';

const FourOhFour: React.FC<{ errorMsg: string }> = ({ errorMsg }) => {
  return (
    <div className="my-12">
      <div className="mx-auto w-1/3">
        <Image
          className="rounded-lg"
          src="/images/mega.png"
          alt="404"
          width={912}
          height={912}
          priority
        />
      </div>
      <div className="mx-auto mt-6 max-w-xl text-gray-500">
        <div className="mb-8 text-xl font-bold">
          Damn. Page doesn't exist.
        </div>
      </div>
    </div>
  );
};

export default FourOhFour;
