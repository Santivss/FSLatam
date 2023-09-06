--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Antiquity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Antiquity" (
    antiquity_id integer NOT NULL,
    antiquity_name text NOT NULL
);


ALTER TABLE public."Antiquity" OWNER TO postgres;

--
-- Name: Antiquity_antiquity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Antiquity_antiquity_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Antiquity_antiquity_id_seq" OWNER TO postgres;

--
-- Name: Antiquity_antiquity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Antiquity_antiquity_id_seq" OWNED BY public."Antiquity".antiquity_id;


--
-- Name: Brand; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Brand" (
    brand_id integer NOT NULL,
    brand_name text NOT NULL
);


ALTER TABLE public."Brand" OWNER TO postgres;

--
-- Name: Brand_brand_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Brand_brand_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Brand_brand_id_seq" OWNER TO postgres;

--
-- Name: Brand_brand_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Brand_brand_id_seq" OWNED BY public."Brand".brand_id;


--
-- Name: Country; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Country" (
    country_id integer NOT NULL,
    country_name text NOT NULL,
    country_icon text NOT NULL
);


ALTER TABLE public."Country" OWNER TO postgres;

--
-- Name: Country_country_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Country_country_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Country_country_id_seq" OWNER TO postgres;

--
-- Name: Country_country_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Country_country_id_seq" OWNED BY public."Country".country_id;


--
-- Name: Game; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Game" (
    game_id integer NOT NULL,
    game_name text NOT NULL,
    game_icon text NOT NULL
);


ALTER TABLE public."Game" OWNER TO postgres;

--
-- Name: Game_game_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Game_game_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Game_game_id_seq" OWNER TO postgres;

--
-- Name: Game_game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Game_game_id_seq" OWNED BY public."Game".game_id;


--
-- Name: Image; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Image" (
    image_id integer NOT NULL,
    image_link text NOT NULL,
    mod_id integer NOT NULL
);


ALTER TABLE public."Image" OWNER TO postgres;

--
-- Name: Image_image_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Image_image_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Image_image_id_seq" OWNER TO postgres;

--
-- Name: Image_image_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Image_image_id_seq" OWNED BY public."Image".image_id;


--
-- Name: Mod; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Mod" (
    mod_id integer NOT NULL,
    mod_title text NOT NULL,
    mod_description text NOT NULL,
    consoles boolean NOT NULL,
    multiplayer boolean NOT NULL,
    mod_link text NOT NULL,
    subcategory_id integer NOT NULL,
    antiquity_id integer,
    game_id integer NOT NULL,
    user_id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    principal_category_id integer,
    user_name text DEFAULT 'userDefault'::text NOT NULL,
    "downloadsCount" integer DEFAULT 0 NOT NULL,
    pc boolean DEFAULT true NOT NULL
);


ALTER TABLE public."Mod" OWNER TO postgres;

--
-- Name: Mod_mod_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Mod_mod_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Mod_mod_id_seq" OWNER TO postgres;

--
-- Name: Mod_mod_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Mod_mod_id_seq" OWNED BY public."Mod".mod_id;


--
-- Name: PrincipalCategory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."PrincipalCategory" (
    principal_category_id integer NOT NULL,
    principal_category_name text NOT NULL,
    principal_category_icon text NOT NULL
);


ALTER TABLE public."PrincipalCategory" OWNER TO postgres;

--
-- Name: PrincipalCategory_principal_category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."PrincipalCategory_principal_category_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."PrincipalCategory_principal_category_id_seq" OWNER TO postgres;

--
-- Name: PrincipalCategory_principal_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."PrincipalCategory_principal_category_id_seq" OWNED BY public."PrincipalCategory".principal_category_id;


--
-- Name: Size; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Size" (
    size_id integer NOT NULL,
    size_name text NOT NULL
);


ALTER TABLE public."Size" OWNER TO postgres;

--
-- Name: Size_size_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Size_size_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Size_size_id_seq" OWNER TO postgres;

--
-- Name: Size_size_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Size_size_id_seq" OWNED BY public."Size".size_id;


--
-- Name: Subcategory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Subcategory" (
    subcategory_id integer NOT NULL,
    subcategory_name text NOT NULL,
    subcategory_icon text NOT NULL,
    principal_category_id integer NOT NULL,
    size boolean,
    antiquity boolean
);


ALTER TABLE public."Subcategory" OWNER TO postgres;

--
-- Name: Subcategory_subcategory_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Subcategory_subcategory_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Subcategory_subcategory_id_seq" OWNER TO postgres;

--
-- Name: Subcategory_subcategory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Subcategory_subcategory_id_seq" OWNED BY public."Subcategory".subcategory_id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    user_id integer NOT NULL,
    user_name text NOT NULL,
    email text NOT NULL,
    password text,
    country_id integer,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    user_icon text DEFAULT 'user_icon_default'::text NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: User_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_user_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."User_user_id_seq" OWNER TO postgres;

--
-- Name: User_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_user_id_seq" OWNED BY public."User".user_id;


--
-- Name: _ModBrand; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_ModBrand" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_ModBrand" OWNER TO postgres;

--
-- Name: _ModSize; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_ModSize" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_ModSize" OWNER TO postgres;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Antiquity antiquity_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Antiquity" ALTER COLUMN antiquity_id SET DEFAULT nextval('public."Antiquity_antiquity_id_seq"'::regclass);


--
-- Name: Brand brand_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Brand" ALTER COLUMN brand_id SET DEFAULT nextval('public."Brand_brand_id_seq"'::regclass);


--
-- Name: Country country_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Country" ALTER COLUMN country_id SET DEFAULT nextval('public."Country_country_id_seq"'::regclass);


--
-- Name: Game game_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Game" ALTER COLUMN game_id SET DEFAULT nextval('public."Game_game_id_seq"'::regclass);


--
-- Name: Image image_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Image" ALTER COLUMN image_id SET DEFAULT nextval('public."Image_image_id_seq"'::regclass);


--
-- Name: Mod mod_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mod" ALTER COLUMN mod_id SET DEFAULT nextval('public."Mod_mod_id_seq"'::regclass);


--
-- Name: PrincipalCategory principal_category_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PrincipalCategory" ALTER COLUMN principal_category_id SET DEFAULT nextval('public."PrincipalCategory_principal_category_id_seq"'::regclass);


--
-- Name: Size size_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Size" ALTER COLUMN size_id SET DEFAULT nextval('public."Size_size_id_seq"'::regclass);


--
-- Name: Subcategory subcategory_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Subcategory" ALTER COLUMN subcategory_id SET DEFAULT nextval('public."Subcategory_subcategory_id_seq"'::regclass);


--
-- Name: User user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN user_id SET DEFAULT nextval('public."User_user_id_seq"'::regclass);


--
-- Data for Name: Antiquity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Antiquity" (antiquity_id, antiquity_name) FROM stdin;
1	old
2	intermediate
3	new
\.


--
-- Data for Name: Brand; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Brand" (brand_id, brand_name) FROM stdin;
\.


--
-- Data for Name: Country; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Country" (country_id, country_name, country_icon) FROM stdin;
\.


--
-- Data for Name: Game; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Game" (game_id, game_name, game_icon) FROM stdin;
1	fs19	fs19_icon
2	fs22	fs22_icon
\.


--
-- Data for Name: Image; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Image" (image_id, image_link, mod_id) FROM stdin;
\.


--
-- Data for Name: Mod; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Mod" (mod_id, mod_title, mod_description, consoles, multiplayer, mod_link, subcategory_id, antiquity_id, game_id, user_id, "createdAt", principal_category_id, user_name, "downloadsCount", pc) FROM stdin;
\.


--
-- Data for Name: PrincipalCategory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."PrincipalCategory" (principal_category_id, principal_category_name, principal_category_icon) FROM stdin;
1	harvesters	harvester_icon
2	maps	map_icon
3	vehicles	vehicle_icon
4	trailers	trailer_icon
5	implements	implement_icon
6	hay	windrower_icon
8	bales	bale_icon
10	loaders	loader_icon
12	animals	cow_icon
14	decoration	decoration_icon
15	others	other_icon
16	tractors	tractor_icon
17	public work	public_work_icon
18	placeables	placeable_icon
13	production	production_icon
9	breeding	breeding_icon
7	fertilization	fertilization_icon
11	forestry	forestry_equipment_icon
\.


--
-- Data for Name: Size; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Size" (size_id, size_name) FROM stdin;
1	small
2	medium
3	large
\.


--
-- Data for Name: Subcategory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Subcategory" (subcategory_id, subcategory_name, subcategory_icon, principal_category_id, size, antiquity) FROM stdin;
1	combined	harvester_combine_icon	1	t	t
2	forrage	harvester_forage_icon	1	t	t
3	grapes	harvester_grape_icon	1	t	t
4	olives	harvester_olive_icon	1	t	t
5	beet	harvester_beet_icon	1	t	t
6	potato\t	harvester_potato_icon	1	t	t
7	sugar cane\t	harvester_sugar_cane_icon	1	t	t
8	cotton	harvester_cotton_icon	1	t	t
9	others	other_icon	1	t	t
10	europe	europe_icon	2	t	f
11	north america	north_america_icon	2	t	f
12	south america	south_america_icon	2	t	f
13	others	other_icon	2	t	f
16	cars	car_icon	3	t	t
26	seeders	seeder_icon	5	t	t
27	planters	planter_icon	5	t	t
28	headers	header_icon	5	t	t
29	disc harrows	disc_harrow_icon	5	t	t
30	\tpower harrows	power_harrow_icon	5	t	t
31	subsoilers	subsoiler_icon	5	t	t
34	weights	weight_icon	5	t	t
35	others	other_icon	5	t	t
39	others	other_icon	6	t	t
36	windrowers	windrower_icon	6	t	t
37	tedders	tedder_icon	6	t	t
107	cut grass	cut_grass_icon	6	t	t
41	slurry tanks	slurry_tank_icon	7	t	t
43	sprayers	sprayer_icon	7	t	t
109	crawler	crawler_tractor_icon	16	t	t
45	\tothers	other_icon	7	t	t
48	bale wrappers	bale_wrapper_icon	8	t	t
49	others	other_icon	8	t	t
56	skid steer loaders	skid_steer_loader_icon	10	t	t
57	wheel loaders	wheel_loader_icon	10	t	t
59	others	other_icon	10	t	t
61	manual tools	manual_tool_icon	11	t	t
62	machines	machine_icon	11	t	t
63	others	other_icon	11	t	t
50	feed mixers	feed_mixer_icon	9	t	t
51	straw blowers	straw_blower_icon	9	t	t
53	others	other_icon	9	t	t
66	others	other_icon	17	t	t
68	sheeps	sheep_icon	12	f	f
70	horses	horse_icon	12	f	f
71	pigs	pig_icon	12	f	f
72	others	other_icon	12	f	f
73	factories	factory_icon	13	t	f
74	selling points	selling_point_icon	13	f	f
76	greenhouses	greenhouse_icon	13	t	f
77	others	other_icon	13	t	f
78	silos	silo_icon	18	t	t
79	houses	house_icon	18	t	t
80	sheds	shed_icon	18	t	t
82	tools	tool_icon	18	f	f
84	others	other_icon	18	t	t
93	others	other_icon	14	f	f
94	scripts	script_icon	15	f	f
95	textures	texture_icon	15	f	f
96	3d models	3d_model_icon	15	f	f
97	i3d	i3d_icon	15	f	f
98	package	package_icon	15	f	f
99	objects	object_icon	15	f	f
100	others	other_icon	15	f	f
105	wheel	wheel_tractor_icon	16	t	t
17	others	other_icon	3	t	t
103	articulated	articulated_tractor_icon	16	t	t
104	electric or hybrid	electric_tractor_icon	16	t	t
46	square	square_bale_icon	8	t	t
14	trucks	truck_icon	3	t	t
18	forage 	forage_trailer_icon	4	t	t
20	low bed 	low_bed_trailer_icon	4	t	t
21	bale 	bale_trailer_icon	4	t	t
22	liquids 	tank_icon	4	t	t
32	\tcultivators	cultivator_icon	5	t	t
24	header 	header_trailer_icon	4	t	t
19	\tauger wagons	auger_wagon_trailer_icon	4	t	t
23	\tlogs	log_trailer_icon	4	t	t
25	\tothers	other_icon	4	t	t
55	telehandlers	tele_handler_icon	10	t	t
58	forklifts	fork_lift_icon	10	t	t
64	machines	construction_machine_icon	17	t	t
69	poultry	hen_icon	12	f	f
67	cows	cow_sub_icon	12	f	f
60	implements	forestry_implement_icon	11	t	t
65	implements	construction_implement_icon	17	t	t
81	tanks	placeable_tank_icon	18	t	t
108	garden	garden_tractor_icon	16	t	t
40	manure	manure_spreader_icon	7	t	t
42	fertilizer 	fertilizer_spreader_icon	7	t	t
47	round 	round_bale_icon	8	t	t
52	animal 	animal_trailer_icon	4	t	t
106	cargo	cargo_trailer_icon	4	t	t
112	advertising	advertising_icon	14	t	t
15	pickup/utility	pickup_icon	3	t	t
33	plows	plow_icon	5	t	t
75	generators	generator_icon	13	t	t
114	buildings	building_icon	14	t	t
110	gates	gate_icon	14	t	t
111	fences	fence_icon	14	t	t
113	lights	light_icon	14	t	t
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (user_id, user_name, email, password, country_id, "createdAt", user_icon) FROM stdin;
\.


--
-- Data for Name: _ModBrand; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_ModBrand" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _ModSize; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_ModSize" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
460d1261-3dfa-423c-8807-edeb95e74c2e	e8f6adb1030a9e0b2a3459ff7e1f5122612da9bee0a9bc164a6f7a5b455225d9	2023-07-14 14:02:11.465104-03	20230714170211_create_db	\N	\N	2023-07-14 14:02:11.350997-03	1
dd25646c-975c-43e5-84fa-e04ecbba2035	f04315eb8ca7dcb842ecb083a471430c91b91d52443ede2ad406b4a042602a1c	2023-07-25 11:33:04.713988-03	20230725143304_image_icon_ahora_es_opcional	\N	\N	2023-07-25 11:33:04.706261-03	1
bc153296-396f-4f31-a4c6-5530698f2f14	9a7ac818c71f97ced8316d99cc60f19eec360898236d9a8f7c41f8f7a4b9e1b1	2023-07-25 11:48:29.868844-03	20230725144829_anitquity_ahora_es_opcional	\N	\N	2023-07-25 11:48:29.853286-03	1
47204a53-0694-4109-8479-6f0146247d58	0f2f32c0ebddd5c2973d29ade953058dbc1fa9caae0fcaa710f33d2fc6e3738d	2023-07-25 11:58:56.703096-03	20230725145856_agregue_una_relacion_entre_mod_y_principal_category	\N	\N	2023-07-25 11:58:56.693084-03	1
e105d2dd-b399-4486-9eb7-3007b252a5d9	1f73c6b13c09ae3ad3e897b9c7aed45db4f9727ae43c0af94ce08ac68f7a2ac3	2023-07-25 14:26:34.069394-03	20230725172634_elimine_la_columna_image_icon_de_mod	\N	\N	2023-07-25 14:26:34.065774-03	1
49a852bd-06ae-4257-85f3-aa0495e3fcf8	cce5c63944c7dc165b8e1be501347ddc1a172693fe2d098f188b81f7e97fad9d	2023-07-26 09:55:39.305551-03	20230726125539_agregue_user_name_a_mod	\N	\N	2023-07-26 09:55:39.297447-03	1
5068f6e1-e344-401c-9f67-9293589ab754	46560373f50b1978b3e1091cbf5b8201e72b706e0e6bd5d74650d3bf3aa5b022	2023-07-26 10:00:35.031742-03	20230726130035_agregue_unique_a_user_name_del_user	\N	\N	2023-07-26 10:00:35.020954-03	1
43d9bf95-4af2-4020-93a2-0f0b9c3e24b9	636f81b2d64762cb7671c01ab31ee2a5cfad24cc23105e9d052062008d277526	2023-07-28 09:28:04.97629-03	20230728122804_agregue_la_columna_downloads_count_a_mod	\N	\N	2023-07-28 09:28:04.965065-03	1
ae41195b-b521-4c2b-9326-6310e39244a5	218fcdcd50e75a9fe8a778713de4fce2473c4034c25530a77c4f00b259e00d95	2023-09-01 14:05:11.407875-03	20230901170511_agregue_la_imagen_por_default_de_usuarios_en_la_db	\N	\N	2023-09-01 14:05:11.398638-03	1
47ba98ed-ef0e-4c37-a8ec-e44c1a215966	bacd4284402d9a976d5f9c87dadc230c71f269bf673052adf721bfbd9f772ba2	2023-09-02 15:01:39.146068-03	20230902180139_agregue_pc_a_la_tabla_mod	\N	\N	2023-09-02 15:01:39.140691-03	1
c11cef98-6541-414f-8518-92797469f884	d2e76a1a481d9f5744a658b05bea81d9380d820a02f283475c64b46d459d3c20	2023-09-02 15:03:07.972967-03	20230902180307_elimine_el_default_de_pc_en_la_tabla_mod	\N	\N	2023-09-02 15:03:07.968581-03	1
7a69c298-bbca-4bba-a75d-01575abea7d5	474c1b16dae9537ab17a168d80709612dc7002fe5ace6ed7536af1662708f70c	2023-09-02 15:06:01.001484-03	20230902180600_agregue_default_true_nuevamente_en_pc_mod	\N	\N	2023-09-02 15:06:00.997376-03	1
\.


--
-- Name: Antiquity_antiquity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Antiquity_antiquity_id_seq"', 3, true);


--
-- Name: Brand_brand_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Brand_brand_id_seq"', 1, false);


--
-- Name: Country_country_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Country_country_id_seq"', 1, false);


--
-- Name: Game_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Game_game_id_seq"', 2, true);


--
-- Name: Image_image_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Image_image_id_seq"', 291, true);


--
-- Name: Mod_mod_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Mod_mod_id_seq"', 113, true);


--
-- Name: PrincipalCategory_principal_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."PrincipalCategory_principal_category_id_seq"', 18, true);


--
-- Name: Size_size_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Size_size_id_seq"', 3, true);


--
-- Name: Subcategory_subcategory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Subcategory_subcategory_id_seq"', 114, true);


--
-- Name: User_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_user_id_seq"', 40, true);


--
-- Name: Antiquity Antiquity_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Antiquity"
    ADD CONSTRAINT "Antiquity_pkey" PRIMARY KEY (antiquity_id);


--
-- Name: Brand Brand_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Brand"
    ADD CONSTRAINT "Brand_pkey" PRIMARY KEY (brand_id);


--
-- Name: Country Country_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Country"
    ADD CONSTRAINT "Country_pkey" PRIMARY KEY (country_id);


--
-- Name: Game Game_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Game"
    ADD CONSTRAINT "Game_pkey" PRIMARY KEY (game_id);


--
-- Name: Image Image_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Image"
    ADD CONSTRAINT "Image_pkey" PRIMARY KEY (image_id);


--
-- Name: Mod Mod_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mod"
    ADD CONSTRAINT "Mod_pkey" PRIMARY KEY (mod_id);


--
-- Name: PrincipalCategory PrincipalCategory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PrincipalCategory"
    ADD CONSTRAINT "PrincipalCategory_pkey" PRIMARY KEY (principal_category_id);


--
-- Name: Size Size_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Size"
    ADD CONSTRAINT "Size_pkey" PRIMARY KEY (size_id);


--
-- Name: Subcategory Subcategory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Subcategory"
    ADD CONSTRAINT "Subcategory_pkey" PRIMARY KEY (subcategory_id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (user_id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: User_user_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_user_name_key" ON public."User" USING btree (user_name);


--
-- Name: _ModBrand_AB_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "_ModBrand_AB_unique" ON public."_ModBrand" USING btree ("A", "B");


--
-- Name: _ModBrand_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_ModBrand_B_index" ON public."_ModBrand" USING btree ("B");


--
-- Name: _ModSize_AB_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "_ModSize_AB_unique" ON public."_ModSize" USING btree ("A", "B");


--
-- Name: _ModSize_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_ModSize_B_index" ON public."_ModSize" USING btree ("B");


--
-- Name: Image Image_mod_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Image"
    ADD CONSTRAINT "Image_mod_id_fkey" FOREIGN KEY (mod_id) REFERENCES public."Mod"(mod_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Mod Mod_antiquity_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mod"
    ADD CONSTRAINT "Mod_antiquity_id_fkey" FOREIGN KEY (antiquity_id) REFERENCES public."Antiquity"(antiquity_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Mod Mod_game_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mod"
    ADD CONSTRAINT "Mod_game_id_fkey" FOREIGN KEY (game_id) REFERENCES public."Game"(game_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Mod Mod_principal_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mod"
    ADD CONSTRAINT "Mod_principal_category_id_fkey" FOREIGN KEY (principal_category_id) REFERENCES public."PrincipalCategory"(principal_category_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Mod Mod_subcategory_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mod"
    ADD CONSTRAINT "Mod_subcategory_id_fkey" FOREIGN KEY (subcategory_id) REFERENCES public."Subcategory"(subcategory_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Mod Mod_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mod"
    ADD CONSTRAINT "Mod_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(user_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Subcategory Subcategory_principal_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Subcategory"
    ADD CONSTRAINT "Subcategory_principal_category_id_fkey" FOREIGN KEY (principal_category_id) REFERENCES public."PrincipalCategory"(principal_category_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: User User_country_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_country_id_fkey" FOREIGN KEY (country_id) REFERENCES public."Country"(country_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: _ModBrand _ModBrand_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_ModBrand"
    ADD CONSTRAINT "_ModBrand_A_fkey" FOREIGN KEY ("A") REFERENCES public."Brand"(brand_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ModBrand _ModBrand_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_ModBrand"
    ADD CONSTRAINT "_ModBrand_B_fkey" FOREIGN KEY ("B") REFERENCES public."Mod"(mod_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ModSize _ModSize_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_ModSize"
    ADD CONSTRAINT "_ModSize_A_fkey" FOREIGN KEY ("A") REFERENCES public."Mod"(mod_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ModSize _ModSize_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_ModSize"
    ADD CONSTRAINT "_ModSize_B_fkey" FOREIGN KEY ("B") REFERENCES public."Size"(size_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

