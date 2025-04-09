import Image from "next/image";
const RemoteImage = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-3.5 px-8 py-8">
      <Image
        width={100}
        height={100}
        src="https://dbw3zep4prcju.cloudfront.net/animal/ad34559e-7295-484c-bf48-106a0b94612a/image/a7c14d77-7412-44a8-9b45-76c9b23b0ccd.jpg?versionId=P_v5UHnJDhW1DfObNyUg2xYkhAJiI207&bust=1744097084&width=100"
        alt="Animal image"
      />
      <Image
        width={100}
        height={100}
        src="https://dbw3zep4prcju.cloudfront.net/animal/ad34559e-7295-484c-bf48-106a0b94612a/image/a7c14d77-7412-44a8-9b45-76c9b23b0ccd.jpg?versionId=P_v5UHnJDhW1DfObNyUg2xYkhAJiI207&bust=1744097084&width=100"
        alt="Animal image"
      />
    </div>
  );
};

export default RemoteImage;

/**why we putting a domain name from where we are picking up our images and that we are doing for a security purpose because if we didnot define it
 * somebody can acces our file and n giving our domain name in next.config json file for security purpose so we only pick pics from the given domain which is online
 await kan kun virker på asynkrn functions which we can see by asyn name  function*/
