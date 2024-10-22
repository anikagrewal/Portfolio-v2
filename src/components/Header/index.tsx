import styles from '@/styles/Home.module.css'

export default function Header() {
    return(
        <div className={`flex flex-center justify-center mt-10`}>
        <div className={`flex bg-newPurple lg:w-pW h-96 md:w-full md:flex-row w-96 md:gap-48 rounded-md shadow-2xl shadow-darkGreen flex-col justify-center items-center lg:flex-row lg:gap-72 lg:h-headerH`}>
            <div>
           <div className={styles.moonAni}>
<div className={styles.moon}>
  <div className={styles.disc}> </div>
</div>
</div>
</div>
<div className={`flex flex-col justify-center items-center text-black mt-10`}>
<h1 className={`text-h1 lg:text-th1`}>Hey, I'm Anika!</h1>
<h4 className={`text-h4 lg:text-h2`}>A Developer & UI/UX Designer</h4>
<p className={`text-black mt-5 lg:text-h4`}>Bringing Digital Dreams to Life</p>
</div>

        </div>
        </div>
    )
}