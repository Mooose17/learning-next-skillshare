import { useRouter } from "next/router"; //https://nextjs.org/docs/api-reference/next/router
import { useEffect } from "react"; //allows for reacthooks to be used at the start of a react life cycle

const errorPage = () => {
  const route = useRouter();
  useEffect(() => {
    setTimeout(() => {
      route.push("/"); //uses the useRouter import to force navigate back to "/" after 3000ms
    }, 3000);
  }, []);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
    </div>
  );
};

export default errorPage;
