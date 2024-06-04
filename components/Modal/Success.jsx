
const Success = ({message}) => {
   return (
      <div className="w-full h-[200px] flex justify-center items-center">
         <h3 className="text-center text-3xl text-green-400">{message}</h3>
      </div>
   );
};

export default Success;