import Link from "next/link";
import Hello from "@/components/Hello";

const index = () => {
  return (
    <div className="home--parent__div">
      <Hello />
      <Link href="/about"> About Page</Link>
    </div>
  );
};

export default index;
