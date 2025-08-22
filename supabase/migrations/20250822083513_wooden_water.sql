/*
  # Add customer types field to review_cards table

  1. Changes
    - Add `customer_types` column to `review_cards` table as text array
    - Add `enable_customer_types` column as boolean to control if this feature is enabled for the card
    - This will store the available customer types that can be selected when writing reviews

  2. Notes
    - customer_types field is optional and can be null
    - enable_customer_types defaults to false
    - Will store an array of strings representing different customer personas
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'review_cards' AND column_name = 'customer_types'
  ) THEN
    ALTER TABLE review_cards ADD COLUMN customer_types text[];
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'review_cards' AND column_name = 'enable_customer_types'
  ) THEN
    ALTER TABLE review_cards ADD COLUMN enable_customer_types boolean DEFAULT false;
  END IF;
END $$;

-- Create index for faster customer type queries
CREATE INDEX IF NOT EXISTS idx_review_cards_customer_types ON review_cards USING GIN(customer_types);
CREATE INDEX IF NOT EXISTS idx_review_cards_enable_customer_types ON review_cards(enable_customer_types);