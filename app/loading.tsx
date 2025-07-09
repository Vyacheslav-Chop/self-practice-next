import Loader from "@/components/Loader/Loader";

const Loading = () => {
  return (
    <Loader
      size={60}
      thickness={4}
      color="#f5d18a"
      borderColor="rgba(255, 255, 255, 0.05)"
      shadowColor="rgba(255, 200, 120, 0.3)"
      innerSize={30}
      innerThickness={2}
      innerColor="#ffcc80"
      innerBorderColor="rgba(255, 255, 255, 0.1)"
    />
  );
};

export default Loading;
