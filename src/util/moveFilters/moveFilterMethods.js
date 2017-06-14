// SPECIFIC CASES FOR HOW WE FILTER A PROPERTY
// we would just add a method if needed for how a property is checked

/*
 * Hit Level Filter Method
 */
export const filterByHitLevel = {
	key: "hit_level",
	method: (moveHitLevel, hitLevelFilter) => {
		//moveHitLevel = moveHitLevel.replace(/ *\([^)]*\) */g, "").trim();
		console.log(moveHitLevel);
		return moveHitLevel.includes(hitLevelFilter);
	}
};

/**
 * Speed Filter Method
 * @param: { min: (int), max: (int) }
 */
export const filterBySpeed = {
	key: "speed",
	method: (moveSpeed, speedFilter) => {
		const { min, max } = speedFilter;
		if (!min) {
			return moveSpeed < max;
		} else if (!max) {
			return moveSpeed > min;
		}
		return moveSpeed >= min && moveSpeed <= max;
	}
};

/**
 * Move Crush Filter
 */

export const filterByCrush = {
	key: "hit_level",
	method: (moveHitLevel, crushFilter) => {
		moveHitLevel = moveHitLevel.replace(/ *\([^)]*\) */g, "").trim();
		return moveHitLevel.includes(crushFilter);
	}
}

/**
 * Special Properties Filter Method
 * @param: property (string)
 */
export const filterBySpecialProp = {
	key: "notes",
	method: (moveProps, filterProp) => {
		return moveProps.replace(/\s/g, '').toLowerCase().includes(filterProp);
	}
};

export const filterByBlockProp = {
	key: "on_block",
	method: (moveFrames, filterProp) => {
		console.log(filterProp);
		if(filterProp == 'safe') {
			return moveFrames >= -9;
		} else if(filterProp == 'punishable') {
			return moveFrames <= -10;
		} else if (filterProp == 'plus') {
			return movesFrames > 0;
		} else if (filterProp == 'negative') {
			return moveFrames < 0;
		}
	}
}

export const filterByHitProp = {
	key: "on_hit",
	method: (moveFrames, filterProp) => {
		if(filterProp == 'plus') {
			return moveFrames > 0;
		} else if(filterProp == 'negative') {
			return moveFrames < 0;
		} else if(filterProp == 'knd') {
			console.log(filterProp);
			return moveFrames.replace(/\s/g, '').toLowerCase().includes(filterProp);
		}
	}
}
