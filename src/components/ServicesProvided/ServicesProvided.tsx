import { useState } from "react";
import styles from './ServicesProvided.module.scss';

const ServicesProvided = () => {

    interface ButtonProps {
        onClick: () => void;
        label: string;
        isSelected: boolean;
      }
      
      const ButtonComponent: React.FC<ButtonProps> = ({ onClick, label, isSelected }) => {
        return (
          <button onClick={onClick} className={isSelected ? styles.btnselected : styles.btn}>
            {label}
          </button>
        );
      };

      interface PhotoProps {
        imageUrl: string,
        imageAlt: string,
      }
      
      const PhotoComponent: React.FC<PhotoProps> = ({ imageUrl, imageAlt }) => {
        return (
          <div>
            <img className={styles.img} src={imageUrl} alt={imageAlt} />
          </div>
        );
      };

      const [selectedButton, setSelectedButton] = useState<number | null>(1);

  const handleButtonClick = (buttonNumber: number) => {
    setSelectedButton(buttonNumber);
  };

  const renderPhoto = () => {
    switch (selectedButton) {
      case 1:
        return <PhotoComponent imageUrl="assets/BannerCeB.jpg" imageAlt='C&B Consultoria' />;
      case 2:
        return <PhotoComponent imageUrl="assets/BannerResults.png" imageAlt='Results Comunicação' />;
      case 3:
        return <PhotoComponent imageUrl="assets/EmBreve.png" imageAlt='Em Breve' />;
        // return <PhotoComponent imageUrl="assets/BannerAurora.jpg" imageAlt='Traje Aurora' />;
      default:
        return null;
    }
  };

    return(

        <div className={styles.box} id="servicos">
      <ButtonComponent onClick={() => handleButtonClick(1)} label="Sites" isSelected={selectedButton === 1}/>
      <ButtonComponent onClick={() => handleButtonClick(2)} label="Landing Page" isSelected={selectedButton === 2}/>
      <ButtonComponent onClick={() => handleButtonClick(3)} label="E-commerces" isSelected={selectedButton === 3}/>

      {renderPhoto()}
    </div>
  );

}

export default ServicesProvided;