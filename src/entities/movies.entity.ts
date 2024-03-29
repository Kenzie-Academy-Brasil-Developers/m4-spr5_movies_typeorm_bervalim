import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Movie")
class Movie {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 50, unique: true })
  name: string;
  @Column({ type: "text", nullable: true })
  description?: string | undefined | null;
  @Column()
  duration: number;
  @Column()
  price: number;
}

export default Movie;
