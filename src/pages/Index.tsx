
import StyleGuidePage from "@/components/StyleGuide/StyleGuidePage";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <Link 
          to="/ui-library" 
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          UI Library
        </Link>
      </div>
      <StyleGuidePage />
    </>
  );
}
