import Image from 'next/image'

const FourOhFour: React.FC<{ errorMsg: string }> = ({ errorMsg }) => {
  return (
    <div className="text-center my-12">
      <div className="mx-auto w-1/3">
        <Image className="customrounded" src="/images/mega.png" alt="404" width={912} height={912} priority />
      </div>
      <div className="mx-auto mt-6 max-w-xl text-gray-500">
        <div className="mb-8 text-xl font-bold">
          Damn, that&apos;s a 404.
        </div>
        <div className="text-sm">
          Press{' '}
          <kbd className="rounded border border-gray-400/20 bg-gray-100 px-1 font-mono text-xs dark:bg-gray-800">
            F12
          </kbd>{' '}
          and open devtools for more details.
        </div>
      </div>
    </div>
  )
}

export default FourOhFour
