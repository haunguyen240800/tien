package com.kma.food.web.rest;

import com.kma.food.repository.UsersRepository;
import com.kma.food.service.UsersService;
import com.kma.food.service.dto.UsersDTO;
import com.kma.food.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.kma.food.domain.Users}.
 */
@RestController
@RequestMapping("/api")
public class UsersResource {

    private final Logger log = LoggerFactory.getLogger(UsersResource.class);

    private static final String ENTITY_NAME = "users";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final UsersService usersService;

    private final UsersRepository usersRepository;

    public UsersResource(UsersService usersService, UsersRepository usersRepository) {
        this.usersService = usersService;
        this.usersRepository = usersRepository;
    }

    /**
     * {@code POST  /user} : Create a new users.
     *
     * @param usersDTO the usersDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new usersDTO, or with status {@code 400 (Bad Request)} if the users has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/user")
    public ResponseEntity<UsersDTO> createUsers(@Valid @RequestBody UsersDTO usersDTO) throws URISyntaxException {
        log.debug("REST request to save Users : {}", usersDTO);
        if (usersDTO.getId() != null) {
            throw new BadRequestAlertException("A new users cannot already have an ID", ENTITY_NAME, "idexists");
        }
        UsersDTO result = usersService.save(usersDTO);
        return ResponseEntity
            .created(new URI("/api/user/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /user/:id} : Updates an existing users.
     *
     * @param id the id of the usersDTO to save.
     * @param usersDTO the usersDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated usersDTO,
     * or with status {@code 400 (Bad Request)} if the usersDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the usersDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/user/{id}")
    public ResponseEntity<UsersDTO> updateUsers(
        @PathVariable(value = "id", required = false) final Long id,
        @Valid @RequestBody UsersDTO usersDTO
    ) throws URISyntaxException {
        log.debug("REST request to update Users : {}, {}", id, usersDTO);
        if (usersDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, usersDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!usersRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        UsersDTO result = usersService.save(usersDTO);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, usersDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code PATCH  /user/:id} : Partial updates given fields of an existing users, field will ignore if it is null
     *
     * @param id the id of the usersDTO to save.
     * @param usersDTO the usersDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated usersDTO,
     * or with status {@code 400 (Bad Request)} if the usersDTO is not valid,
     * or with status {@code 404 (Not Found)} if the usersDTO is not found,
     * or with status {@code 500 (Internal Server Error)} if the usersDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/user/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<UsersDTO> partialUpdateUsers(
        @PathVariable(value = "id", required = false) final Long id,
        @NotNull @RequestBody UsersDTO usersDTO
    ) throws URISyntaxException {
        log.debug("REST request to partial update Users partially : {}, {}", id, usersDTO);
        if (usersDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, usersDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!usersRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<UsersDTO> result = usersService.partialUpdate(usersDTO);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, usersDTO.getId().toString())
        );
    }

    @GetMapping(value = "/user/get-by-page")
    @Secured(value = "ROLE_ADMIN")
    public ResponseEntity<List<UsersDTO>> getUserByPage(Pageable pageable) {
        Page<UsersDTO> byPageable = usersService.findAll(pageable);
        log.info("REST get users by pageable {}", pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), byPageable);
        return ResponseEntity.ok().headers(headers).body(byPageable.getContent());
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<UsersDTO> getUsers(@PathVariable Long id) {
        log.debug("REST request to get Users : {}", id);
        Optional<UsersDTO> usersDTO = usersService.findOne(id);
        return ResponseUtil.wrapOrNotFound(usersDTO);
    }

    /**
     * {@code DELETE  /user/:id} : delete the "id" users.
     *
     * @param id the id of the usersDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/user/{id}")
    public ResponseEntity<Void> deleteUsers(@PathVariable Long id) {
        log.debug("REST request to delete Users : {}", id);
        usersService.delete(id);
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString()))
            .build();
    }
}
