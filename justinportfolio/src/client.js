import sanityClient from "@sanity/client"

const client = sanityClient({
    projectId: "pvvtq9d5",
    dataset: "production"
});

export default client