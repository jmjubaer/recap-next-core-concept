import styles from "./About.module.css";
// We can only use metadata in server components. we can use "use client" in this page
export const metadata = {
    title: "About us",
};
const AboutUsPage = () => {
    return <div className={styles.text_style}>AboutUs Page</div>;
};

export default AboutUsPage;
