-- User
CREATE SEQUENCE IF NOT EXISTS public.ID_SEQ_APP_USER INCREMENT 1 START 1;
CREATE TABLE IF NOT EXISTS public.APP_USER(
    ID INTEGER PRIMARY KEY,
    NAME CHARACTER VARYING,
    USERNAME CHARACTER VARYING,
    PASSWORD CHARACTER VARYING
);