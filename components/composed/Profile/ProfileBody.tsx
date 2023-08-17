'use client';
import { useEffect, useState } from "react";
import styles from "../../../app/profile/Profile.module.scss";
import { Button } from "@/components/Button/Button";
import { IconPlus, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { MY_QUOTES, QuoteState } from "@/constants/profile";
import { formatAddress } from "@/utils/format";
import { useAccount, useEnsName } from "wagmi";
import { QuotesTable } from "./Quotes";
import { TendersTable } from "./Tenders";

export const ProfileBody = ()=>{
    const router = useRouter();
    const { address, isConnected } = useAccount();
    const { data: ensName } = useEnsName({ address });
    const [isWalletConnected, setIsConnected] = useState<boolean>(true);
    const [quotes, setQuotes] = useState<QuoteState[]>([]);
    const [sectionType, setSectionType] = useState<"offers" | "tenders">("offers"); // My offers or My tenders
    const [description, setDescription] = useState<string>("Wallet no conectada");

    useEffect(() => {
        setIsConnected(isConnected);
        if(isConnected){
            setQuotes(MY_QUOTES);
            if(address && address.length > 0) {
                setDescription(ensName ? ensName : formatAddress(address))
            }
        }
    }, [isConnected])

    const toggleSection = ()=> setSectionType(sectionType == "offers" ? "tenders" : "offers");

    return (
        <>
            <section className={styles.profile_header}>
                <h1>Mi Perfil - Ejemplo S.A</h1>
                <p>30-12345678-5 • <span>{description}</span></p>
            </section>
            <div className={styles.profile_actions}>
                <Button
                    type="main"
                    onClick={() => router.push("/crear-licitacion")}
                >
                    <IconPlus/> Crear licitacion
                </Button>
                <Button
                    type="alt"
                    onClick={() => router.push("/create-profile")}
                >
                    <IconUser /> Crear mi perfil
                </Button>
            </div>
            <section 
                className={styles.profile_slider}
                onClick={toggleSection}
            >
                    <div className={sectionType == "offers" ? styles.profile_sliderSelected : styles.profile_sliderDefault}>
                        Mis Ofertas
                    </div>
                    <div className={sectionType == "tenders" ? styles.profile_sliderSelected : styles.profile_sliderDefault}>
                        Mis Licitaciones
                    </div>
            </section>
            {
                sectionType == "offers" ? (
                    <QuotesTable quotes={quotes} />
                ) : (
                    <TendersTable quotes={quotes} />
                )
            }
        </>
    )
}