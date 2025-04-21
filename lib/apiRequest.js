import toast from "react-hot-toast";

export async function makeApiRequest(setLoading,url,data,resourceName,reset) {


    try {
        setLoading(true);
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log(response);
            setLoading(false);
            toast.success(`New ${resourceName} created successfully`);
            reset();
        } else{
            setLoading(false);
            toast.error("Something went wrong");
            // reset();
        }
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
}