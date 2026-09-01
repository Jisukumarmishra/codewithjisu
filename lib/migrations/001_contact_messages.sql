-- ============================================================
-- PlanetScale migration: 001_contact_messages
-- Run this in the PlanetScale console or via mysql2
-- ============================================================

CREATE TABLE IF NOT EXISTS contact_messages (
  id         INT          AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR(255) NOT NULL,
  email      VARCHAR(255) NOT NULL,
  message    TEXT         NOT NULL,
  created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_created_at (created_at)
);
