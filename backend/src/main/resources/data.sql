INSERT INTO CONTACT_TYPE (id, type) VALUES (876, 'Contact Type 1');
INSERT INTO CONTACT_TYPE (id, type) VALUES (875, 'Contact Type 2');
INSERT INTO CONTACT_TYPE (id, type) VALUES (874, 'Contact Type 3');
INSERT INTO CONTACT_TYPE (id, type) VALUES (873, 'Contact Type 4');

INSERT INTO CONTACT (id, birth_date, contact_name, phone, contact_type_id) VALUES (986, '2020-12-01T03:00:00.000Z', 'Ana', '+55048994649702', 876);
INSERT INTO CONTACT (id, birth_date, contact_name, phone, contact_type_id) VALUES (675, '2020-12-01T03:00:00.000Z', 'Robert', '+55048994649702', 876);
INSERT INTO CONTACT (id, birth_date, contact_name, phone, contact_type_id) VALUES (987, '2020-12-01T03:00:00.000Z', 'Pedro', '+55048994649702', 876);
INSERT INTO CONTACT (id, birth_date, contact_name, phone, contact_type_id) VALUES (941, '2020-12-01T03:00:00.000Z', 'Cris', '+55048994649702', 876);

INSERT INTO RESERVATION (id, favorite, description, name, rating, text, contact_id) VALUES (233, 'false', 'Friday May 10 at 1:00 PM', 'Fogo the Chao', 5, '', 986);
INSERT INTO RESERVATION (id, favorite, description, name, rating, text, contact_id) VALUES (234, 'false', 'Sunday May 17 at 9:00 PM', 'Second Dock', 5, '', 675);
INSERT INTO RESERVATION (id, favorite, description, name, rating, text, contact_id) VALUES (235, 'false', 'Sunday May 18 at 11:00 PM', 'Island Creek', 2, '', 987);
