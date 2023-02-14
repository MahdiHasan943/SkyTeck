import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -SkyTech`;
    }, [title])
};

export default useTitle;