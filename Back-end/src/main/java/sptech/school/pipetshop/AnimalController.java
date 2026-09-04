package sptech.school.pipetshop;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/pets")
public class AnimalController {
    private final JdbcTemplate template;

    public AnimalController(JdbcTemplate template) {
        this.template = template;
    }

    @PostMapping
    public ResponseEntity<Animal> cadastrar(
            @RequestBody Animal animal
    ) {
        String sql = "INSERT INTO pet (nome, especie, raca, sexo, idade, peso, nome_tutor) VALUES (?,?,?,?,?,?,?)";
        KeyHolder holder = new GeneratedKeyHolder();
        template.update(con -> {
            PreparedStatement statement = con.prepareStatement(
                    sql,
                    Statement.RETURN_GENERATED_KEYS
            );
            statement.setString(1, animal.getNome());
            statement.setString(2, animal.getEspecie());
            statement.setString(3, animal.getRaca());
            statement.setString(4, animal.getSexo());
            statement.setInt(5, animal.getIdade());
            statement.setDouble(6, animal.getPeso());
            statement.setString(7, animal.getNomeTutor());
            return statement;
        }, holder);
        int idGerado = holder.getKey().intValue();
        animal.setId(idGerado);
        return ResponseEntity.status(201).body(animal);
    }

    @GetMapping
    public ResponseEntity<List<Animal>> listar() {
        String sql = "SELECT * FROM pet";
        List<Animal> resultado = template.query(sql,
                new BeanPropertyRowMapper<>(Animal.class));
        return ResponseEntity.status(200).body(resultado);
    }
}
