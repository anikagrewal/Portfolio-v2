import styles from '@/styles/Home.module.css'

export default function Header() {
    return(
        <div className={`flex bg-darkBlue w-full h-96 flex-col justify-center items-center lg:flex-row lg:gap-72`}>
            <div>
           <div className={styles.moonAni}>
<div className={styles.moon}>
  <div className={styles.disc}> </div>
</div>
</div>
</div>
<div className={`flex flex-col justify-center items-center text-lightBlue mt-10`}>
<h1 className={`text-h1`}>Hey, I'm Anika!</h1>
<h4 className={`text-h4`}>A Developer & UI/UX Designer</h4>
<p className={`text-yellow mt-5`}>Bringing Digital Dreams to Life</p>
</div>

        </div>
    )
}