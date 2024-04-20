
CREATE TABLE hap.`users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email_address` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(200) NOT NULL,
  `conversation_id` varchar(200) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `dataform`;
CREATE TABLE hap.`dataform` (
    `id` int NOT NULL AUTO_INCREMENT,
    `user_id` int NOT NULL,
    `age` VARCHAR(5) NOT NULL,
    `sex` VARCHAR(5) NOT NULL,
    `trestbps` VARCHAR(5) NOT NULL,
    `chol` VARCHAR(5) NOT NULL,
    `fbs` VARCHAR(5) NOT NULL,
    `restecg` VARCHAR(5) NOT NULL,
    `thalach` VARCHAR(5) NOT NULL,
    `exang` VARCHAR(5) NOT NULL,
    `oldpeak` VARCHAR(5) NOT NULL,
    `slope` VARCHAR(5) NOT NULL,
    `ca` VARCHAR(5) NOT NULL,
    `thal` VARCHAR(5) NOT NULL,
    CONSTRAINT `dataform_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `prediction`;
CREATE TABLE hap.`prediction` (
  `id` int DEFAULT NULL,
  `num` varchar(5) DEFAULT NULL,
  KEY `id` (`id`),
  CONSTRAINT `prediction_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`),
  CONSTRAINT `prediction_ibfk_2` FOREIGN KEY (`id`) REFERENCES `dataform` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

